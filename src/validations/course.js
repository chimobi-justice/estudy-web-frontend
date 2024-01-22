import * as Yup from 'yup';

export const courseValidateSchema = Yup.object({
  name: Yup.string().required('Required'),
  title: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
  description: Yup.string().required('Required'),
});
