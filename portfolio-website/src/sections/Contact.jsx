import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({target: { name, value }}) => {
        setForm({...form, [name]: value})
    };

    // const handleChange2 = (e) => {
    //     setForm({...form, [e.target.name]: e.target.value})
    // }

    //emailJs: service_lil702f

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        
        try{
            await emailjs.send(
                'service_lil702f', 
                'template_m32hkim',
                {
                    from_name: form.name,
                    to_name: 'Anish',
                    from_email: form.email,
                    to_email: 'anishkdas.1998@gmail.com',
                    message: form.message 
                },
                '_jHoYRkak00KGkBwU'
            )

            setLoading(false);
            alert('Your message has been sent!');
            setForm({
                name: '',
                email: '',
                message: ''
            });

        }catch(error){   
            setLoading(false);

            console.log(error);
            alert('something went wrong!')

        }

    }; 
  return (
    <section className="c-space my-20">
        <div className="relative min-h-screen flex justify-center items-center flex-col">
            <img 
                src="/assets/terminal.png" 
                alt="" 
                className="absolute inset-0 h-full w-full "        
            />
            <div className="contact-container pb-3">
                <h3 className="head-text">
                    Let's Talk
                </h3>
                <p className="text-lg text-white-600 mt-3">
                    Whether you're looking to build a new website, improve your platform, or bring a unique project to life I'm here to help.
                </p>

                <form 
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col space-y-10"
                >
                    <label className="space-y-3">
                        <span className="field-label">
                            Full Name
                        </span>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="John Doe" 
                        />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">
                            Email
                        </span>
                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="johndoe@gmail.com" 
                        />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">
                            Your Message
                        </span>
                        <textarea 
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="Hi, I'm interested in..." 
                        />
                    </label>
                    <button
                        className="field-btn"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Sending' : 'Send Message'}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                          
                    </button>

                </form>

            </div>
        </div>

    </section>
  )
}

export default Contact