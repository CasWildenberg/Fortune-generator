function generateFortune(){
    const firstElements = ['In the near future','Tomorrow','Next week tuesday','In three to five businessdays','On christmas next year','When you drive home from work tomorrow'];
    const secondElements = ['heavily interested in','a knowledgeable person in the field of','vaguely familiar with','completely obsessed by'];
    const thirdElements = ['the aerodynamics of a lobster','monkeys on pogosticks','cryptocurrencies','influencing the market value of green soap','finding a medicine for hickups'];

    const element1 = Math.floor(Math.random()* (firstElements.length - 1));
    const element2 = Math.floor(Math.random()* (secondElements.length - 1));
    const element3 = Math.floor(Math.random()* (thirdElements.length - 1));

    return firstElements[element1] + ' you will be ' + secondElements[element2] + ' ' + thirdElements[element3]
}

function showFortune(){
    document.getElementById('fortune-text').innerHTML = generateFortune();
    document.getElementById('fortune-message-container').style.display = 'block';

}

const button = document.getElementById('fortune-button');
button.addEventListener('click',showFortune);