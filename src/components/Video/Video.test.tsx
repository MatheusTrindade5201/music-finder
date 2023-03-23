import { getId } from "../../helpers/getId";

test('Se retorna Null quando enviado um id inválido', () => {
    expect(getId('5')).toBeNull()
})

test('Se retorna o Id quando enviado um id válido', () => {
    expect(getId('https://www.youtube.com/watch?v=2yAcHDBYNzE&t=626s')).toBe('2yAcHDBYNzE')
})

test('Se retorna Null quando enviado um valor undefined', () => {
    expect(getId(undefined)).toBeNull()
})