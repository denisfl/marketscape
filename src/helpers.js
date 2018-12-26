import nanoid from 'nanoid'

export function id () {
  return 'key-' + nanoid()
}
