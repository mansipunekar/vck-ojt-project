import Header from "../components/HEADER/Header";

const ContactPages = () => {
    return(
      <>
      <Header />
      <div className="contact-page">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Whether you have questions about admissions,
            programs, or campus life, our team is here to help.
          </p>

          <h2>General Enquiries</h2>
          <p><strong>Vivekanand College Main Campus</strong><br />
            [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br />
            India</p>
          <p>Phone: <strong>+91 12345 67890</strong><br />
            Email: <a href="mailto:info@vivekanandcollege.edu">info@vivekanandcollege.edu</a><br />
            Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

          <h2>Admissions Office</h2>
          <p>For all admission-related queries regarding undergraduate or postgraduate programs.<br />
            Phone: <strong>+91 98765 43210</strong><br />
            Email: <a href="mailto:admissions@vivekanandcollege.edu">admissions@vivekanandcollege.edu</a></p>

          <h2>Student Support Services</h2>
          <p>For current student support, academic advising, or general assistance.<br />
            Phone: <strong>+91 87654 32109</strong><br />
            Email: <a href="mailto:studentsupport@vivekanandcollege.edu">studentsupport@vivekanandcollege.edu</a></p>

          <h2>Find Us on the Map</h2>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View on Google Maps</a>

          <h2>Send Us a Message</h2>
          <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
        </div>
      </div>
    </>

    )
}
export default ContactPages;
