import * as Yup from 'yup';

export const validateSchema = Yup.object({
    fullname: Yup.string().required('Requred'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
});