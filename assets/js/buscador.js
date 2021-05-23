function searchPlanet() {
    const planetName = document.querySelector("[name='planet-name']").value

    if(planetName == 'terra')
        return showPlanet('https://img.olhardigital.com.br/wp-content/uploads/2020/08/20200831092339.jpg',"Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70 percent of Earth's surface.")
    
    if (planetName == 'mercurio')
        return showPlanet('https://c.ndtvimg.com/2019-11/7bja6f74_mercury-pixabay_625x300_09_November_19.jpg', "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.")

    return showNotFound()


}

function showPlanet(img, desc) {
    document.querySelector("#result img").src = img
    document.querySelector("#result p").innerHTML = desc
    document.querySelector('#result').style.display = 'block'
}

function showNotFound() {
    document.querySelector('#result').style.display = 'none'
    document.querySelector('#noresult').style.display = 'block'
}