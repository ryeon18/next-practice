function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

/**
 * 정적으로 최적화 되지 않는다.
 * 에러가 발생했을 때 서버쪽으로 에러를 보내는 걸 동반하기 때문이다.
 *
 */
