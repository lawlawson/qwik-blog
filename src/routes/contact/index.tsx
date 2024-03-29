import { component$, useStyles$ } from '@builder.io/qwik';
import ContactStyles from './contact.css?inline';

export default component$(() => {
  useStyles$(ContactStyles);

  return (
    <article>
      <h2>About</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
        consequatur accusantium, explicabo esse, deserunt illo, soluta quia quas
        illum modi accusamus voluptates porro! Officia voluptas ducimus sit
        labore a blanditiis unde? Alias fugiat quidem excepturi ab labore hic
        odit? Minima corrupti error tempora ipsa? Enim modi tempora eveniet
        harum voluptas.
      </p>
    </article>
  );
});
