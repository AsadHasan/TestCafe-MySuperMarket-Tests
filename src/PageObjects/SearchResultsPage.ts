import { Selector } from "testcafe";

export class SearchResultsPage {
  public searchResults: Selector = Selector("#ProductListContainer");

  public async hasResults(): Promise<boolean> {
    return await this.searchResults.hasChildElements;
  }
}
