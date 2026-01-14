import { type Page, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
    readonly shoppingCart: Locator;

    constructor(page: Page) {
        super(page);
        this.shoppingCart = this.page.locator('#shopping_cart_container');
    }

}