import Validator from 'validatorjs';


/**
 * @class UserInputValidation
 */
class UserInputValidation {
  /**
   * validate user input on signUp
   *
   * @param {object} formInput
   *
   * @returns {boolean} true
   * @returns {object} errors
   */
  static requestValidation(formInput) {
    const {
      title, description
    } = formInput;

    const validation = new Validator(
      {
        title,
        description,
      },
      {
        title: 'required|string|min:5|max:50',
        description: 'required|string|min:20|max:500',
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
