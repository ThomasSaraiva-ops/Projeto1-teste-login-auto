Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br')
    I.click ('Login')
    I.fillField ('#user','saraivathomas@live.com')
    I.fillField ('#password','123456')
    I.click ('#btnLogin')
    I.waitForText ('Login realizado',3)

}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br')
    I.click ('Login')
    I.fillField ('#user','')
    I.fillField ('#password','12346')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.')

})

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br')
    I.click ('Login')
    I.fillField ('#user','')
    I.fillField ('#password','')
    I.click ('#btnLogin')
    I.waitForText('E-mail inválido')

})

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br')
    I.click('Login')
    I.fillField ('#user','')
    I.fillField('#password','123456')
    I.click ('#btnLogin')
    I.waitForText ('E-mail inválido')

});