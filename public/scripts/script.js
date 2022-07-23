$("#contact-form").validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
      maxlength: 70,
    },
    country: {
      required: true,
      minlength: 2,
      maxlength: 70,
    },
    email: {
      required: true,
      email: true,
    },
    phone: {
      required: true,
      digits: true,
      minlength: 9,
      maxlength: 10,
    },
  },
});

$("#contact-form1").validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
      maxlength: 70,
    },
    country: {
      required: true,
      minlength: 2,
      maxlength: 70,
    },
    email: {
      required: true,
      email: true,
    },
    phone: {
      required: true,
      digits: true,
      minlength: 9,
      maxlength: 10,
    },
  },
});
