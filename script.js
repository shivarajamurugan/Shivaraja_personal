document.addEventListener('DOMContentLoaded', function() {
    // To-Do List
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');

    addTodoBtn.addEventListener('click', function() {
        const task = todoInput.value;
        if (task) {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.textContent = task;
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            todoInput.value = '';
        }
    });

    // Notes
    const noteInput = document.getElementById('noteInput');
    const addNoteBtn = document.getElementById('addNoteBtn');
    const noteList = document.getElementById('noteList');

    addNoteBtn.addEventListener('click', function() {
        const note = noteInput.value;
        if (note) {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = note;
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });
            li.appendChild(deleteBtn);
            noteList.appendChild(li);
            noteInput.value = '';
        }
    });

    // Image Gallery and Slider
    const imageUpload = document.getElementById('imageUpload');
    const gallery = document.getElementById('gallery');
    const carouselInner = document.getElementById('carousel-inner');
    const carouselIndicators = document.getElementById('carousel-indicators');
    let slideIndex = 0;

    imageUpload.addEventListener('change', function(event) {
        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'img-fluid';

                // Image Gallery
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';

                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.appendChild(img);

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', function() {
                    col.remove();
                });

                galleryItem.appendChild(deleteBtn);
                col.appendChild(galleryItem);
                gallery.appendChild(col);

                // Image Slider
                const carouselItem = document.createElement('div');
                carouselItem.className = `carousel-item${slideIndex === 0 ? ' active' : ''}`;
                const carouselImg = document.createElement('img');
                carouselImg.src = e.target.result;
                carouselImg.className = 'd-block w-100';
                carouselItem.appendChild(carouselImg);

                carouselInner.appendChild(carouselItem);

                const indicator = document.createElement('li');
                indicator.setAttribute('data-target', '#imageSlider');
                indicator.setAttribute('data-slide-to', slideIndex);
                if (slideIndex === 0) {
                    indicator.className = 'active';
                }
                carouselIndicators.appendChild(indicator);

                slideIndex++;
            }

            reader.readAsDataURL(file);
        }
    });

    // Chatbot
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    sendBtn.addEventListener('click', function() {
        const message = userInput.value;
        if (message) {
            const userMessage = document.createElement('div');
            userMessage.className = 'user-message';
            userMessage.textContent = message;
            chatbox.appendChild(userMessage);

            const botResponse = getBotResponse(message);
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.textContent = botResponse;
            chatbox.appendChild(botMessage);

            chatbox.scrollTop = chatbox.scrollHeight;
            userInput.value = '';
        }
    });

    function getBotResponse(input) {
        const responses = {
            "hello": "Hi there! How can I assist you today?",
            "how are you": "I'm just a program, so I don't have feelings, but thanks for asking!",
            "bye": "Goodbye! Have a great day!"
        };

        const response = responses[input.toLowerCase()] || "I'm not sure how to respond to that. Can you try asking something else?";
        return response;
    }
});
