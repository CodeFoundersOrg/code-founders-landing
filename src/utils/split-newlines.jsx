export default function splitNewlines(props) {
  return (
    <>
      <p
        dangerouslySetInnerHTML={{
          __html: props.content
            .replace(/\n([ \t]*\n)+/g, '</p><p>')
            .replace('\n', '<br />'),
        }}
      ></p>
    </>
  );
}
