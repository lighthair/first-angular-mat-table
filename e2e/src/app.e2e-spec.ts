import { Selector } from 'testcafe';
import { AngularJSSelector, AngularSelector } from 'testcafe-angular-selectors';

fixture('Smoke test')
  .page('http://localhost:4200');

test('Title should be BFZ Rechnung', async t => {
  const articleHeader = Selector('title');
  await t
    .expect(articleHeader.innerText).eql('BFZ Rechnung');
});

test('There should be an Add Button', async t => {
  const addBtn = AngularSelector('button');
  await t
    .expect(addBtn.innerText).eql('Add');
});

test('There should be an mat table', async t => {
  const table = AngularSelector('mat-table');
  await t
    .expect(table.childElementCount).eql(1);
});
