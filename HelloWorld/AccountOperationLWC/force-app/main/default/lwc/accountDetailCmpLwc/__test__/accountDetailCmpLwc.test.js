import { createElement } from 'lwc'; 
import accountDetailCmpLwc from 'c/accountDetailCmpLwc'; 
import { registerApexTestWireAdapter } from '@salesforce/sfdx-lwc-jest';
import getAccountList from '@salesforce/apex/AccountListController.getAccountList';


const mockGetAccountList = require('./data/getAccountList.json');

// Register as Apex wire adapter. Some tests verify that provisioned values trigger desired behavior.
const getAccountListAdapter = registerApexTestWireAdapter(getAccountList);


describe('c-account-Detail-Cmp-Lwc Test Suite ', ()=>{

    afterEach(() => {
        while (document.body.firstChild) {
          document.body.removeChild(document.body.firstChild);
        }
        // Prevent data saved on mocks from leaking between tests
        jest.clearAllMocks();
      });

      describe('getAccountList @wire data', () => {
        it('renders six records', () => {
          const element = createElement('c-account-detail-cmp-lwc', {
            is: accountDetailCmpLwc
          });
          document.body.appendChild(element);

          getAccountListAdapter.emit(mockGetAccountList);
        
          return Promise.resolve().then(() => {
            // Select elements for validation
            const accountElements = element.shadowRoot.querySelectorAll('li');
            expect(accountElements.length).toBe(mockGetAccountList.length);
            expect(accountElements[0].textContent).toBe(mockGetAccountList[0].Name);
          });
        });

    });
});
