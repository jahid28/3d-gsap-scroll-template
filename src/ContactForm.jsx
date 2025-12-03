import React, { useState, useRef } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(''); 
  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);

  const resetForm = (form) => {
    form.reset();
    setErrors({});
  };

  // function to validate form values
  function validate(values) {
    const e = {};
    if (!values.name) e.name = 'Please enter your name';
    if (!values.email) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email';
    if (!values.subject) e.subject = 'Please add a subject';
    if (!values.message || values.message.trim().length < 10) e.message = 'Please provide a message (10+ characters)';
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const formVals = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      organisation: form.organisation.value.trim(),
      enquiryType: form.enquiryType.value,
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
      website: form.website.value.trim(), 
    };

    const e = validate(formVals);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    if (formVals.website) return;

    const attachment = fileRef.current?.files?.[0];
    if (attachment && attachment.size > 5 * 1024 * 1024) {
      setErrors({ attachment: 'Attachment too large (max 5MB).' });
      return;
    }

    setStatus('sending');
    setErrors({});

    try {
      const fd = new FormData();
      Object.entries(formVals).forEach(([k, v]) => fd.append(k, v));
      if (attachment) fd.append('attachment', attachment);

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
      });

      if (!res.ok) {
        let msg = 'Form submission failed. Please try again later.';
        try { const txt = await res.text(); if (txt) msg = txt; } catch {}
        throw new Error(msg);
      }

      setStatus('success');
      setTimeout(() => setStatus(''), 7000);
      resetForm(form);

    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <section className="w-full bg-[#151515] py-12 px-4">
      <div className="max-w-4xl mx-auto bg-[#232020] rounded-xl p-6 shadow-lg">
        <h3 className="text-3xl font-extrabold text-orange-500 mb-4">Send us a message</h3>
        <p className="text-sm text-gray-200 mb-6">Tell us about your enquiry and we'll get back within 2 business days.</p>

        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">Full name <span className="text-red-400">*</span></label>
              <input name="name" id="name" className="w-full rounded-md px-3 py-2 bg-[#111] border border-[#333] focus:outline-none focus:ring-2 focus:ring-orange-500" />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">Email <span className="text-red-400">*</span></label>
              <input name="email" id="email" type="email" className="w-full rounded-md px-3 py-2 bg-[#111] border border-[#333] focus:outline-none focus:ring-2 focus:ring-orange-500" />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone (optional)</label>
              <input name="phone" id="phone" type="tel" className="w-full rounded-md px-3 py-2 bg-[#111] border border-[#333]" placeholder="+65 8123 4567" />
            </div>

            <div>
              <label htmlFor="organisation" className="block text-sm font-semibold mb-1">Organisation / University (optional)</label>
              <input name="organisation" id="organisation" className="w-full rounded-md px-3 py-2 bg-[#111] border border-[#333]" placeholder="e.g. NTU Robotics Club" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="enquiryType" className="block text-sm font-semibold mb-1">Type of enquiry</label>
              <select name="enquiryType" id="enquiryType" className="w-full rounded-md px-3 py-2 bg-[#111] border border-[#333]">
                <option value="general">General enquiry</option>
                <option value="project">Project partnership</option>
                <option value="technical">Technical support</option>
                <option value="sales">Sales / Quotation</option>
                <option value="recruitment">Recruitment / Internship</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-1">Subject <span className="text-red-400">*</span></label>
              <input name="subject" id="subject" className="w-full rounded-md px-3 py-2 bg-[#111] border border-[#333]" />
              {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1">Message <span className="text-red-400">*</span></label>
            <textarea name="message" id="message" rows="6" className="w-full rounded-md px-3 py-2 bg-[#111] border border-[#333]" placeholder="Tell us about your request…" />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div>
              <label className="block text-sm font-semibold mb-1">Attachment (optional)</label>
              <input ref={fileRef} name="attachment" type="file" className="text-sm text-gray-300" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" />
              <p className="text-xs text-gray-400 mt-1">Accepted: PDF, DOC, JPG, PNG. Max 5 MB.</p>
              {errors.attachment && <p className="text-xs text-red-400 mt-1">{errors.attachment}</p>}
            </div>

            <div>
              <label htmlFor="website" className="sr-only">Website</label>
              <input id="website" name="website" autoComplete="off" tabIndex="-1" className="opacity-0 pointer-events-none absolute -left-96" />
              <label className="inline-flex items-center text-sm text-gray-300">
                <input name="consent" type="checkbox" defaultChecked required className="mr-2 accent-orange-500" />
                By submitting this form, I agree to be contacted by Mecatron. 
              </label>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-semibold ${status === 'sending' ? 'bg-orange-300 text-black' : 'bg-orange-500 text-white'}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && <span className="text-sm text-green-400">Message sent — we’ll reply within 2 business days.</span>}
            {status === 'error' && <span className="text-sm text-red-400">Error sending — try again or email teammecatronntu@gmail.com</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
