import { Selector } from "testcafe";
import { Homepage } from "../PageObjects/Homepage";
import { SearchResultsPage } from "../PageObjects/SearchResultsPage";

const homepageUrl: string = "https://www.mysupermarket.co.uk";
fixture`Search Items`.page(homepageUrl);

test("Search for items", async (t) => {
  const homepage: Homepage = new Homepage();
  const searchItem: string = "cucumber";
  const searchResultsPage: SearchResultsPage = await homepage.searchItem(
    searchItem,
  );
  const searchResultsAreReturned = await searchResultsPage.hasResults();

  await t.expect(searchResultsAreReturned).eql(true);
});
