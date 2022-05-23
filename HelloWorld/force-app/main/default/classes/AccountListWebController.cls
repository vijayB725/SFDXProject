public with sharing class AccountListWebController {
    public AccountListWebController() {

    }
    
    @AuraEnabled(cacheable=true)
    public static List<sObject> getContactList(string name){
        string key = '%' +name+ '%';
        string query = 'Select Id, Name, Email, Phone From Contact Where Name like :key';
        return Database.query(query);
    }

    @AuraEnabled(cacheable=true)
    public static List<sObject> getAccountList(string name){

        string key = '%' +name+ '%';
        string query = 'Select Id, Name, Industry From Account Where Name like :key';
        return Database.query(query);
    }
}
