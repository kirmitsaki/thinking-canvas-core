import { describe, it } from 'vitest';
import { strict as assert } from 'node:assert';
import { contactDetails } from './contact';

describe('Rachel’s supplied contact destinations', () => {
  it('opens an email to Rachel', () => {
    assert.equal(contactDetails.email, 'rachel.kirmitsaki@gmail.com');
    assert.equal(contactDetails.emailHref, 'mailto:rachel.kirmitsaki@gmail.com');
  });
  it('opens Rachel’s LinkedIn profile securely', () => {
    assert.equal(contactDetails.linkedin, 'https://linkedin.com/in/rachelkirmitsaki');
  });
});