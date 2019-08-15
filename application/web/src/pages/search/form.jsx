import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { Button, Field, Space } from '../../components';
import { FormWrapper } from './style';

const SearchForm = React.memo(
  ({
    errors,
    isSubmitting,
    isValid,
    handleSubmit,
    handleBlur,
    handleChange,
    values,
  }) => (
    <FormWrapper>
      <Field
        block
        placeholder="Código de rastramento"
        size="large"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trackId}
        name="trackId"
        error={errors.trackId}
      />
      <Space size="10px" />
      <Button
        block
        size="large"
        onClick={handleSubmit}
        disabled={!isValid || isSubmitting}
      >
        Entrar
      </Button>
    </FormWrapper>
  ),
);

SearchForm.propTypes = {
  errors: PropTypes.shape({
    trackId: PropTypes.string,
  }).isRequired,

  values: PropTypes.shape({
    trackId: PropTypes.string,
  }).isRequired,

  handleSubmit: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,

  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
};

const SearchFormHoc = withFormik({
  mapPropsToValues: () => ({ trackId: '' }),

  validationSchema: Yup.object().shape({
    trackId: Yup.string().required('Preencha o codigo de rastreamento'),
  }),

  handleSubmit: (values, bag) => {
    console.log(bag);
    const {
      props: {
        history: { push },
      },
      setSubmitting,
    } = bag;

    push(`/track/${values.trackId}`);
    setSubmitting(false);
  },
})(SearchForm);

export default withRouter(SearchFormHoc);
