
$( document ).ready(function() {
    const inputText = document.getElementById('inputsearch');
    const content = document.getElementById('searchContent');
    const categorie = document.querySelectorAll("ul.padre > li > a.hijo");

    console.log(categorie);
    
    const arrTextProduct = [];

    document.querySelectorAll('.nameProduct').forEach(function(button) {
        arrTextProduct.push(button.value.trim())
    });

    const search = () => {
        const text = inputText.value.toLowerCase();
        content.innerHTML = '';

        for (let index = 0; index < arrTextProduct.length; index++) {
            const elementArr = arrTextProduct[index].toLowerCase();
            
            if (elementArr.indexOf(text) != -1) {

                let arrSplit = arrTextProduct[index].split("_|_");

                content.innerHTML += `
                <div class="column is-4">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <h6>
                                <a href="` + arrSplit[2] + `">
                                    `+ arrSplit[0] +`
                                </a>
                            </h6>
                            <p>$ `+ arrSplit[1] +`</p>
                        </div>
                    </div>
                </div>
                `
            }

        }
    }

    inputText.addEventListener('keyup', search);

    for (list of categorie) {
        list.addEventListener("click", function(evt){
            var hijo = evt.target;
            const textCat = hijo.innerText.trim().toLowerCase();
            content.innerHTML = '';

            for (let index = 0; index < arrTextProduct.length; index++) {
                const elementArr = arrTextProduct[index].toLowerCase();
                console.log(arrTextProduct[index]);
                if (elementArr.indexOf(textCat) != -1) {
    
                    let arrSplit = arrTextProduct[index].split("_|_");
    
                    content.innerHTML += `
                    <div class="column is-4">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image">
                                </figure>
                            </div>
                            <div class="card-content">
                                <h6>
                                    <a href="` + arrSplit[2] + `">
                                        `+ arrSplit[0] +`
                                    </a>
                                </h6>
                                <p>$ `+ arrSplit[1] +`</p>
                            </div>
                        </div>
                    </div>
                    `
                }
    
            }

        });
    }

    search();
});