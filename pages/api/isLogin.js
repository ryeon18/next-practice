// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function isLoginAPI(req, res) {
  res.statusCode = 200;
  res.json({ name: req.cookies.a_name });
}
