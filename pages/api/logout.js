// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: "ok" });
};

/**
 * Max-Age= 0 이면 즉시 쿠키는 소멸된다.
 */
