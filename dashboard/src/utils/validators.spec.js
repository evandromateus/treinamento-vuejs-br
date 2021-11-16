import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators Utils', () => {
  it('Should return an error if no param is passed', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('Should return an error if less than 3 characteres value is passed', () => {
    expect(validateEmptyAndLength3('tt')).toBe('*Este campo precisa de no minimo 3 caracteres')
  })

  it('Should return true if a correct value is passed', () => {
    expect(validateEmptyAndLength3('123')).toBe(true)
  })

  it('Should return an error if no param is passed', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('Should return an error if a invalid email is passed', () => {
    expect(validateEmptyAndEmail('invalidemail')).toBe('*Este campo precisa ser um e-mail')
  })
  
  it('Should return true if a valid email is passed', () => {
    expect(validateEmptyAndEmail('validemail@email.com')).toBe(true)
  })
})