export async function getStaticProps() {
  // Call an external API endpoint to get albums.
  // You can use any data fetching library
  const res = await fetch(
    "https://dawahnigeria.com/dawahcast/albumapi3/214594"
  );
  const albums = await res.json();

  // By returning { props: { albums } }, the Blog component
  // will receive `albums` as a prop at build time
  return {
    props: {
      albums,
    },
  };
}
