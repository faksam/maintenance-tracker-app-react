import authValidation from '../../app/validator/authValidation';

const { signInInputValidation, signUpInputValidation } = authValidation;

describe('Login input Validations', () => {
  test('should return an error when invalid data is sent', () => {
    const inavlidData = { email: '', password: '' };
    const result = signInInputValidation(inavlidData);
    expect(result.isValid).toEqual(false);
  });
  test('should return an error when invalid data is sent', () => {
    const inavlidData = { email: '', password: '', fullname: '', password_confirmation: '' };
    const result = signUpInputValidation(inavlidData);
    expect(result.isValid).toEqual(false);
  });
  test('should return true when valid data is sent', () => {
    const inavlidData = { email: 'fakunlesamuel@gmail.com', password: 'Lifeisarace' };
    const result = signInInputValidation(inavlidData);
    expect(result.isValid).toEqual(true);
  });
  test('should return true when valid data is sent', () => {
    const inavlidData = { email: 'fakunlesamuel@gmail.com', password: 'Lifeisarace', fullname: 'Life', password_confirmation: 'Lifeisarace' };
    const result = signUpInputValidation(inavlidData);
    expect(result.isValid).toEqual(true);
  });
});
