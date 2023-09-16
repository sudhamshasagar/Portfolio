const educationData = [
    {
        title: 'SSLC',
        description: 'Government Junior College, Sagara',
        year: 2016,
    },
    {
        title: 'PUC',
        description: 'Junior College, Sagara',
        year: 2018,
    },
    {
        title: 'B.Sc',
        description: 'Mahatma Gandhi Memorial College, Udupi',
        year: 2021
    },
    {
        title: 'MS in Data Science',
        description: 'UpGrad In Coordination with IIIT Bangalore',
        year: 'Ongoing'
    }
];



const educationContainer = document.querySelector('.education-details');

educationData.forEach(function (education) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'mb-3');

    cardDiv.innerHTML = `
        <div class="row g-0">
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${education.title}</h5>
                    <p class="card-text">${education.description}</p>
                </div>
            </div>
        </div>
    `;

    educationContainer.appendChild(cardDiv);
});



// Collapsing Navigation Menu

