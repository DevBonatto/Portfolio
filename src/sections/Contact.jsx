import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Modal } from 'antd'

const Contact = () => {
  const formRef = useRef()

  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        'service_8ufwmol', 
        'template_b6bcxxu',
        {
          from_name: form.name,
          to_name: 'Lucca',
          from_email: form.email,
          to_email: 'devbonatto@gmail.com',
          message: form.message
        },
        'rVjRZeQ1m_2oI5d0j'
      )

      setLoading(false)
      setIsModalVisible(true)

      setForm({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      setLoading(false)
      console.log('Error on submit email: ', error)
    }
  }

  return (
    <section className='c-space my-20' id='contact'>
       <Modal
        title="Success!"
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>Your message has been sent!</p>
      </Modal>
      
      <div className='relative min-h-screen flex items-center justify-center flex-col py-4'>
        <img src="/assets/terminal.png" alt="terminal-background" className='absolute inset-0 min-h-screen' />
        <div className='contact-container'>
          <h3 className='head-text'>Let's talk</h3>
          <p className='text-lg text-white-600 mt-3'>
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='Lucca Bonatto'
              />
            </label>
            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='devbonatto@gmail.com'
              />
            </label>
            <label className='space-y-3'>
              <span className='field-label'>Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                className='field-input resize-none'
                placeholder="Hi, I'm interested in..."
              />
            </label>

            <button className='field-btn' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact