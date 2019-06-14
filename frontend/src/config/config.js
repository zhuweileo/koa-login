let ROOT = ''

if (process.env.NODE_ENV === 'development') {
  ROOT = '//localhost:3000'
} else {
  ROOT = '';
}

export default {
  service: {
    SIGNUP: ROOT + '/api/signup',
    SIGNIN: ROOT + '/api/signin',
  }
}