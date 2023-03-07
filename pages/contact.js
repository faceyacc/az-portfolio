import styles from "../styles/Contact.module.css";

const Absence = () => {
  return (
    <>
      <div className={styles.tokyo_tm_contact}>
        <div className={styles.tokyo_tm_title}>
          <div className={styles.title_flex}>
            <div className={styles.left}>
              <span>Contact + Commission</span>
              <h3>Get in Touch</h3>
              <h8>Interested in commission? Let's get in touch!</h8>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className={styles.fields}>
          <form>
            <div className={styles.first}>
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Best Email to reach you"
                  />
                </li>
                {/* END EMAIL */}

                <li>
                  <input type="text" name="name" placeholder="Subject" />
                </li>

                <li>
                  <textarea
                    name="message"
                    placeholder="Shoot us an email and we will get back to you as soon as possible :)"
                  ></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className={styles.tokyo_tm_button}>
              <button type="submit" className={styles.ib_button}>
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
    </>
  );
};

export default Absence;
