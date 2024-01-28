import * as Yup from 'yup';

export const courseValidateSchema = Yup.object({
  name: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  price: Yup.number().nullable().typeError('Price must be a valid number'),
  description: Yup.string().required('Required'),
});
