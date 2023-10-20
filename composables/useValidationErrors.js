export const useValidationErrors = (errors) => {
    return errors.reduce((acc, value) => {
      return { ...acc, [value.$property]: value.$message }
    }, {})
  }