import Validator from 'validatorjs';


/**
 * @class UserInputValidation
 */
class UserInputValidation {
  /**
   * validate user input on signIn
   *
   * @param {object} formInput
   *
   * @returns {boolean} true
   * @returns {object} errors
   */
  static signInInputValidation(formInput) {
    const {
      email, password
    } = formInput;

    const validation = new Validator(
      {
        email,
        password
      },
      {
        email: 'required|string|email',
        password: 'required|min:8|max:40',
      },
    );
    const isValid = false;

    if (validation.passes()) {
      return {
        isValid: true
      };
    }

    const errors = validation.errors.all();
    return {
      isValid,
      errors
    };
  }

  /**
   * validate user input on signUp
   *
   * @param {object} formInput
   *
   * @returns {boolean} true
   * @returns {object} errors
   */
  static signUpInputValidation(formInput) {
    const {
      fullname, email, password, password_confirmation 
    } = formInput;

    const validation = new Validator(
      {
        fullname,
        email,
        password,
        password_confirmation
      },
      {
        fullname: 'required|string|min:2|max:40',
        email: 'required|string|email',
        password: 'required|min:8|max:40|confirmed',
        password_confirmation: 'required'
      },
    );
    const isValid = false;

    if (validation.passes()) {
      return {
        isValid: true
      };
    }

    const errors = validation.errors.all();
    return {
      isValid,
      errors
    };
  }
}

export default UserInputValidation;
