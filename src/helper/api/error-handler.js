import { NextResponse } from 'next/server';

export const errorMessages = {
  conflict: 'Confict',
  unAuthorized: 'UnAuthorized',
  notFound: 'Not Found',
  validationError: 'Validation Error',
  serverError: 'Server Error',
};

function errorHandler(err, req) {
  if (typeof err === 'string') {
    const is404 = err.toLowerCase().endsWith('not found');
    const statusCode = is404 ? 404 : 400;
    return new NextResponse(JSON.stringify({ message: err }), {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (err.message === errorMessages.unAuthorized) {
    return new NextResponse(
      JSON.stringify({ message: errorMessages.unAuthorized }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  if (err.message === errorMessages.conflict) {
    return new NextResponse(
      JSON.stringify({ message: errorMessages.conflict }),
      {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  if (err.message === errorMessages.validationError) {
    return new NextResponse(
      JSON.stringify({ status: 400, errors: req.errors }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  return new NextResponse(JSON.stringify({ message: err.message }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' },
  });
}

export { errorHandler };
