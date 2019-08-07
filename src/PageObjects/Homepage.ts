import { Selector, t } from "testcafe";
import { SearchResultsPage } from "./SearchResultsPage";

export class Homepage {
  public readonly searchTextField: Selector = Selector("#txtfind");
  public readonly searchButton: Selector = Selector("#btnFind");

  public async searchItem(item: string): Promise<SearchResultsPage> {
    await t.typeText(this.searchTextField, item).click(this.searchButton);

    return new SearchResultsPage();
  }
}
