'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import Button from './Button';

const Reservation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      time: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Name is required';
      } else if (values.name.length < 2) {
        errors.name = 'Name must be at least 2 characters';
      }

      if (!values.date) {
        errors.date = 'Date is required';
      } else if (new Date(values.date) < new Date().setHours(0, 0, 0, 0)) {
        errors.date = 'Date cannot be in the past';
      }

      if (!values.time) {
        errors.time = 'Time is required';
      } else if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(values.time)) {
        errors.time = 'Invalid time format';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log('Reservation Details:', values);
      setIsSubmitted(true);
      formik.resetForm();
    },
  });

  return (
    <div className="col-lg-10 reservation">
      <form onSubmit={formik.handleSubmit}>
        <div className="row gx-2 gy-1">
          {/* Name Field */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-md-3 mb-lg-0">
            <input
              type="text"
              name="name"
              className={`name ${
                formik.errors.name && formik.touched.name ? 'is-invalid' : ''
              }`}
              placeholder="Person"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="invalid-feedback">{formik.errors.name}</div>
            )}
          </div>

          {/* Date Field */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-md-3 mb-lg-0">
            <input
              type="date"
              name="date"
              className={`date ${
                formik.errors.date && formik.touched.date ? 'is-invalid' : ''
              }`}
              placeholder="Reserved date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            {formik.touched.date && formik.errors.date && (
              <div className="invalid-feedback">{formik.errors.date}</div>
            )}
          </div>

          {/* Time Field */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3 mb-md-0">
            <input
              type="time"
              name="time"
              className={`time ${
                formik.errors.time && formik.touched.time ? 'is-invalid' : ''
              }`}
              min="09:00"
              max="24:00"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
            />
            {formik.touched.time && formik.errors.time && (
              <div className="invalid-feedback">{formik.errors.time}</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <Button btnType="secondary" type="submit">
              Book a table
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
