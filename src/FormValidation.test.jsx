import { bookingFormSchema } from './component/BookingForm'
import { confirmationFormSchema } from './component/ConfirmationFrom'

describe('BookingForm validation', () => {
  describe('date field', () => {
    test('is required', async () => {
      await expect(bookingFormSchema.validateAt('date', {})).rejects.toThrow('Date is required')
    })

    test('passes with a valid date string', async () => {
      await expect(bookingFormSchema.validateAt('date', { date: '2026-07-15' })).resolves.toBe('2026-07-15')
    })
  })

  describe('time field', () => {
    test('is required', async () => {
      await expect(bookingFormSchema.validateAt('time', {})).rejects.toThrow('Time is required')
    })

    test('passes with a valid time', async () => {
      await expect(bookingFormSchema.validateAt('time', { time: '18:00' })).resolves.toBe('18:00')
    })
  })

  describe('diners field', () => {
    test('is required', async () => {
      await expect(bookingFormSchema.validateAt('diners', {})).rejects.toThrow('Number of guests is required')
    })

    test('accepts empty string and shows required', async () => {
      await expect(bookingFormSchema.validateAt('diners', { diners: '' })).rejects.toThrow('Number of guests is required')
    })

    test('rejects values less than 1', async () => {
      await expect(bookingFormSchema.validateAt('diners', { diners: 0 })).rejects.toThrow('At least 1 guest')
    })

    test('rejects values greater than 10', async () => {
      await expect(bookingFormSchema.validateAt('diners', { diners: 11 })).rejects.toThrow('Maximum 10 guests')
    })

    test('passes with a valid number of guests', async () => {
      await expect(bookingFormSchema.validateAt('diners', { diners: 4 })).resolves.toBe(4)
    })

    test('passes with minimum guests', async () => {
      await expect(bookingFormSchema.validateAt('diners', { diners: 1 })).resolves.toBe(1)
    })

    test('passes with maximum guests', async () => {
      await expect(bookingFormSchema.validateAt('diners', { diners: 10 })).resolves.toBe(10)
    })
  })

  describe('occasion field', () => {
    test('is required', async () => {
      await expect(bookingFormSchema.validateAt('occasion', {})).rejects.toThrow('Occasion is required')
    })

    test('passes with a valid occasion', async () => {
      await expect(bookingFormSchema.validateAt('occasion', { occasion: 'Birthday' })).resolves.toBe('Birthday')
    })
  })

  describe('full schema', () => {
    test('passes with all valid fields', async () => {
      const data = { date: '2026-07-15', time: '19:00', diners: 4, occasion: 'Birthday' }
      await expect(bookingFormSchema.validate(data)).resolves.toEqual(data)
    })

    test('fails when all fields are missing', async () => {
      await expect(bookingFormSchema.validate({})).rejects.toThrow()
    })
  })
})

describe('ConfirmationForm validation', () => {
  describe('name field', () => {
    test('is required', async () => {
      await expect(confirmationFormSchema.validateAt('name', {})).rejects.toThrow('Name is required')
    })

    test('rejects less than 3 characters', async () => {
      await expect(confirmationFormSchema.validateAt('name', { name: 'Ab' })).rejects.toThrow('Name must be at least 3 characters')
    })

    test('rejects name starting with a number', async () => {
      await expect(confirmationFormSchema.validateAt('name', { name: '1yassine' })).rejects.toThrow('Name cannot start with a number')
    })

    test('passes with a valid name', async () => {
      await expect(confirmationFormSchema.validateAt('name', { name: 'yassine' })).resolves.toBe('yassine')
    })
  })

  describe('email field', () => {
    test('is required', async () => {
      await expect(confirmationFormSchema.validateAt('email', {})).rejects.toThrow('Email is required')
    })

    test('rejects invalid email format', async () => {
      await expect(confirmationFormSchema.validateAt('email', { email: 'not-an-email' })).rejects.toThrow('Invalid email')
    })

    test('passes with a valid email', async () => {
      await expect(confirmationFormSchema.validateAt('email', { email: 'yassine@example.com' })).resolves.toBe('yassine@example.com')
    })
  })

  describe('phone field', () => {
    test('is optional (empty string passes)', async () => {
      await expect(confirmationFormSchema.validateAt('phone', { phone: '' })).resolves.toBeUndefined()
    })

    test('accepts a valid phone number', async () => {
      await expect(confirmationFormSchema.validateAt('phone', { phone: '1234567890' })).resolves.toBe('1234567890')
    })

    test('accepts phone with dashes', async () => {
      await expect(confirmationFormSchema.validateAt('phone', { phone: '123-456-7890' })).resolves.toBe('123-456-7890')
    })

    test('rejects a phone that is too short', async () => {
      await expect(confirmationFormSchema.validateAt('phone', { phone: '123' })).rejects.toThrow('Invalid phone number')
    })
  })

  describe('full schema', () => {
    test('passes with all valid fields', async () => {
      const data = { name: 'yassine dahmani', email: 'yassine@example.com', phone: '123-456-7890' }
      await expect(confirmationFormSchema.validate(data)).resolves.toEqual(data)
    })

    test('passes without phone (optional)', async () => {
      const data = { name: 'yassine dahmani', email: 'yassine@example.com', phone: '' }
      await expect(confirmationFormSchema.validate(data)).resolves.toEqual({ name: 'yassine dahmani', email: 'yassine@example.com' })
    })

    test('fails when required fields are missing', async () => {
      await expect(confirmationFormSchema.validate({})).rejects.toThrow()
    })
  })
})
