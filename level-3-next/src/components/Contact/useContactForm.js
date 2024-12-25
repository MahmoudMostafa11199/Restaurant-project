'use client';

import { useFormik } from 'formik';
import Swal from 'sweetalert2';

export const useContactForm = function () {
  const sendMessgaeTelegram = async function (values) {
    try {
      const token = '8145826097:AAHVxNBsWRIg_2wB_V5HN2KIxIT1Fux_LEs';
      const chatId = 1476437182;
      const message = `New Contact Form Submission:\n${JSON.stringify(
        values,
        null,
        2
      )}`;

      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );
      const data = await res.json();

      if (data.ok) {
        Swal.fire(
          'Message Sent!',
          'Your message has been sent successfully.',
          'success'
        );
        formik.resetForm();
      }
    } catch (err) {
      Swal.fire(
        'Error!',
        `Failed to send message. Please try again later.(${err.message})`,
        'error'
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      companyName: '',
      comment: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstname) {
        errors.firstname = 'First Name is required';
      } else if (values.firstname.length < 3) {
        errors.firstname = 'First Name must be at least 3 characters';
      }

      if (!values.lastname) {
        errors.lastname = 'Last Name is required';
      } else if (values.lastname.length < 3) {
        errors.lastname = 'Last Name must be at least 3 characters';
      }

      if (!values.companyName) {
        errors.companyName = 'Company Name is required';
      } else if (values.companyName.length < 3) {
        errors.companyName = 'Company Name must be at least 3 characters';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = 'Email is incorrect';
      }

      if (!values.comment) {
        errors.comment = 'Comment is required';
      } else if (values.comment.length < 3) {
        errors.comment = 'Comment must be at least 3 characters';
      }

      return errors;
    },

    onSubmit: (values) => {
      sendMessgaeTelegram(values);
    },
  });

  return formik;
};
