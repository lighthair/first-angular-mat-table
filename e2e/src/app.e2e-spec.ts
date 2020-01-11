import { Selector } from 'testcafe';

fixture('Smoke test')
  .page('http://localhost:4200');

test('Title should be BFZ Rechnung', async t => {
  const articleHeader = await Selector('title');
  await t
    .expect(articleHeader.innerText).eql('BFZ Rechnung');
});
