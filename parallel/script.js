const questions = [
    {
        question: "Asynchronous methods in C++ can operate with or without return values.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Async methods can use std::future to return values, or they can simply perform tasks without returning anything (fire-and-forget)."
    },
    {
        question: "How many times can you use latches in your program?",
        options: ["3", "Unlimited", "1", "2"],
        correct: 2,
        explanation: "A latch is a single-use synchronization object. Once its counter reaches zero, it cannot be reset or reused."
    },
    {
        question: "A function template in C++ that runs a method asynchronously in a separate thread.",
        options: ["thread", "async", "future", "poll"],
        correct: 1,
        explanation: "std::async is a function template that launches a callable asynchronously and returns a std::future holding the eventual result."
    },
    {
        question: "___________ programming is a technique that enables your program to start a potentially long-running task and still be responsive to other events while that task runs.",
        options: ["Object-oriented", "Asynchronous", "Synchronous", "Functional"],
        correct: 1,
        explanation: "Asynchronous programming allows tasks to run in the background without blocking the main execution flow, keeping the program responsive."
    },
    {
        question: "Client program in C++ can both receive and send data.",
        options: ["True", "False"],
        correct: 0,
        explanation: "A client socket can use send() and recv() (or read/write) to both transmit and receive data over the connection."
    },
    {
        question: "______________________ is the mechanism provided by the operating system that allows processes to communicate with each other.",
        options: ["Asynchronous", "Semaphores", "Sockets", "Interprocess Communication"],
        correct: 3,
        explanation: "IPC (Interprocess Communication) is the umbrella term for all OS-provided mechanisms (pipes, shared memory, sockets, etc.) that let processes exchange data."
    },
    {
        question: "Which one of the following is a synchronization tool?",
        options: ["thread", "pipe", "socket", "semaphore"],
        correct: 3,
        explanation: "A semaphore is a synchronization primitive that controls access to shared resources by multiple threads using acquire/release operations."
    },
    {
        question: "What is the range of value allowed for counting semaphores?",
        options: ["0 to Platform Dependent Maximum Constant", "0 and 1", "1 to 1000", "1 to 10"],
        correct: 0,
        explanation: "Counting semaphores can range from 0 up to a platform-defined maximum (like std::counting_semaphore's LeastMaxValue template parameter)."
    },
    {
        question: "The binary semaphore will have a value of 0, 1, 2, 3, etc.",
        options: ["True", "False"],
        correct: 1,
        explanation: "A binary semaphore only holds the values 0 or 1, acting like a simple lock. Values beyond 1 are for counting semaphores."
    },
    {
        question: "connect() function command is used in Server program.",
        options: ["True", "False"],
        correct: 1,
        explanation: "connect() is used by the client to initiate a connection to a server. The server uses bind(), listen(), and accept() instead."
    },
    {
        question: "The semaphore's release() method always increments the counter's value.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Calling release() (also known as signal/post) always increments the semaphore's internal counter, potentially unblocking a waiting thread."
    },
    {
        question: "The binary semaphore can have a positive or negative value.",
        options: ["True", "False"],
        correct: 1,
        explanation: "A binary semaphore can only have values 0 or 1. It cannot go negative — acquire() blocks instead of decrementing below zero."
    },
    {
        question: "The semaphore's acquire() method decrements its value if the counter is positive.",
        options: ["True", "False"],
        correct: 0,
        explanation: "When the counter is positive, acquire() decrements it and proceeds. If the counter is zero, the thread blocks until it becomes positive."
    },
    {
        question: "The binary semaphore can be acquired and released by different threads.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Unlike a mutex, a semaphore has no ownership. Any thread can call release() regardless of which thread called acquire()."
    },
    {
        question: "How many times can you use barriers in your program?",
        options: ["3", "1", "Unlimited", "2"],
        correct: 2,
        explanation: "Unlike latches, barriers are reusable. After all threads arrive and the barrier is released, it resets and can be used again in the next phase."
    },
    {
        question: "Calling the semaphore's release() method blocks and waits until the semaphore is available.",
        options: ["True", "False"],
        correct: 1,
        explanation: "release() never blocks — it simply increments the counter. It is acquire() that blocks when the counter is zero."
    },
    {
        question: "Semaphores were proposed by _________________ in 1965.",
        options: ["Dijkstra", "Bjarne", "Torvalds", "Tanenbaum"],
        correct: 0,
        explanation: "Edsger Dijkstra introduced the semaphore concept in 1965 as a solution to the mutual exclusion problem in concurrent programming."
    },
    {
        question: "It is an IPC Strategy where a data channel exists that is unidirectional.",
        options: ["Message Queues", "Shared Memory", "Pipes", "Socket"],
        correct: 2,
        explanation: "A pipe provides a one-way (unidirectional) data channel between processes. For two-way communication, you need two pipes or use sockets."
    },
    {
        question: "The semaphore's release() method always decrements the counter's value.",
        options: ["True", "False"],
        correct: 1,
        explanation: "release() increments the counter, not decrements. It is acquire() that decrements the counter value."
    },
    {
        question: "Asynchronous methods in C++ can return values after operations.",
        options: ["True", "False"],
        correct: 0,
        explanation: "Using std::async with std::future, an asynchronous operation can return a value that the caller retrieves later via future.get()."
    },
    {
        question: "Asynchronous methods in C++ cannot return values after operations.",
        options: ["True", "False"],
        correct: 1,
        explanation: "This is false because std::future allows async methods to return values. The caller simply calls get() to retrieve the result when ready."
    },
    {
        question: "It is an IPC Strategy where system messages are sent from one process to another.",
        options: ["Socket", "Pipes", "File", "Signal"],
        correct: 3,
        explanation: "Signals are system-level messages (like SIGTERM, SIGINT) sent between processes to notify them of events or request actions."
    },
    {
        question: "A barrier means any thread/process must stop at this point and cannot proceed until all others reach the barrier.",
        options: ["True", "False"],
        correct: 0,
        explanation: "A barrier is a synchronization point where all participating threads must arrive before any of them can continue past it."
    },
    {
        question: "The proper sequence in creating a server program in C++.",
        options: [
            "socket(), bind(), listen(), accept() and close()",
            "bind(), socket(), listen(), accept() and close()",
            "socket(), listen(), bind(), accept() and close()",
            "socket(), bind(), accept(), listen() and close()"
        ],
        correct: 0,
        explanation: "A server must first create a socket, bind it to an address/port, listen for connections, accept incoming clients, then close when done."
    },
    {
        question: "It is an IPC Strategy where endpoints are created for sending and receiving data in a network.",
        options: ["Pipes", "Shared Memory", "Message Queue", "None of the Above (Sockets)"],
        correct: 3,
        explanation: "Sockets create network endpoints that allow bidirectional communication between processes, even across different machines."
    },
    {
        question: "In addition to modifying the counter value, what else does calling the semaphore's release() method do?",
        options: [
            "Block all other threads waiting on the semaphore",
            "Increments the internal counter and unblocks acquirers",
            "Nothing else",
            "Block and wait until the semaphore is available"
        ],
        correct: 1,
        explanation: "release() increments the counter and wakes up threads that are blocked in acquire(), allowing one of them to proceed."
    },
    {
        question: "What is the order of arguments in listen()?",
        options: [
            "None",
            "Param 1 = The Socket to Listen, Param 2 = Maximum number of connections",
            "Param 1 = Port Number, Param 2 = IP address",
            "Param 1 = Maximum number of connections, Param 2 = The Socket to Listen"
        ],
        correct: 1,
        explanation: "listen(sockfd, backlog) takes the socket file descriptor first and the maximum pending connection queue size (backlog) second."
    },
    {
        question: "What methods are used for semaphore operation?",
        options: ["release", "wait", "arrive", "acquire"],
        correct: [0, 3],
        explanation: "Semaphores use both acquire() (to decrement/wait) and release() (to increment/signal) as their two core operations."
    },
    {
        question: "___________________ programming is a way of connecting two nodes on a network to communicate with each other.",
        options: ["Shared Memory", "Synchronous", "Asynchronous", "Socket"],
        correct: 3,
        explanation: "Socket programming creates communication endpoints between two network nodes, enabling data exchange over protocols like TCP or UDP."
    },
    {
        question: "What methods are used for barriers and latches?",
        options: ["wait", "release", "arrive", "acquire"],
        correct: [0, 2],
        explanation: "Barriers and latches use arrive() to signal reaching the sync point and wait() to block until all participants have arrived."
    },
    {
        question: "It is an IPC strategy where memory can be simultaneously accessed by multiple processes.",
        options: ["Shared Memory", "Files", "Pipes", "Socket"],
        correct: 0,
        explanation: "Shared memory maps the same physical memory region into multiple processes' address spaces, allowing direct simultaneous access."
    },
    {
        question: "A class template in C++ used to access the result of an asynchronous operation.",
        options: ["future", "thread", "async", "synchronized"],
        correct: 0,
        explanation: "std::future is a class template that acts as a placeholder for a value that will be available once an asynchronous operation completes."
    },
    {
        question: "A method of future class template that returns the result of an asynchronous operation.",
        options: ["return", "get", "getResult", "wait"],
        correct: 1,
        explanation: "future.get() blocks until the async operation finishes, then returns the result. It can only be called once per future."
    },
    {
        question: "What data type is being wrapped by Semaphores in C++?",
        options: ["atomic int", "boolean", "int", "atomic boolean"],
        correct: 0,
        explanation: "C++ semaphores internally use an atomic integer to manage the counter, ensuring thread-safe increment and decrement operations."
    },
    {
        question: "The binary semaphore can only be acquired and released by the same thread.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Unlike a mutex, a binary semaphore has no thread ownership. Any thread can release it, regardless of which thread acquired it."
    },
    {
        question: "What is the binary semaphore also known as?",
        options: ["spin lock", "mutex lock", "dead lock", "race lock"],
        correct: 1,
        explanation: "A binary semaphore is often referred to as a mutex lock because it behaves similarly — only allowing one thread to access a resource at a time."
    },
    {
        question: "What is the initial value of a binary semaphore?",
        options: ["0", "1", "-1", "2"],
        correct: 1,
        explanation: "A binary semaphore starts at 1, meaning the resource is available. When acquired it becomes 0, blocking others until released."
    },
    {
        question: "Semaphores, Barriers, and Latches in C++ are only available in which version and above?",
        options: ["C++11", "C++14", "C++17", "C++20"],
        correct: 3,
        explanation: "std::counting_semaphore, std::barrier, and std::latch were all introduced in the C++20 standard as part of the concurrency library additions."
    },
    {
        question: "What compiler flag must be added to enable C++20 features?",
        options: ["-std=c++17", "-std=c++20", "-std=c++14", "-std=c++11"],
        correct: 1,
        explanation: "The -std=c++20 flag tells the compiler to use the C++20 standard, which is required for features like semaphores, barriers, and latches."
    },
    {
        question: "The latch class is a downward counter type which can be used to synchronize threads.",
        options: ["True", "False"],
        correct: 0,
        explanation: "std::latch is a single-use downward counter. Threads can decrement it and wait for it to reach zero, synchronizing their execution."
    },
    {
        question: "What does the std::latch method count_down() do?",
        options: ["blocks until the counter reaches zero", "decrements the counter in a non-blocking manner", "tests if the internal counter equals zero", "resets the counter to its initial value"],
        correct: 1,
        explanation: "count_down() decrements the latch counter without blocking. It simply reduces the count and returns immediately."
    },
    {
        question: "What does the std::latch method try_wait() do?",
        options: ["blocks until the counter reaches zero", "decrements the counter in a non-blocking manner", "tests if the internal counter equals zero", "resets the latch counter"],
        correct: 2,
        explanation: "try_wait() checks whether the latch counter has reached zero without blocking. It returns true if the counter is zero, false otherwise."
    },
    {
        question: "What does the std::barrier method arrive_and_drop() do?",
        options: ["arrives at barrier and decrements the expected count", "blocks at the phase synchronization point", "decrements both the initial expected count for subsequent phases and the expected count for current phase by one", "resets the barrier to its initial state"],
        correct: 2,
        explanation: "arrive_and_drop() decrements both the current phase count and the expected count for future phases, effectively removing a thread from all subsequent barrier synchronizations."
    },
    {
        question: "In asynchronous programming, does the program wait for a long-running task to finish before responding to other events?",
        options: ["True", "False"],
        correct: 1,
        explanation: "Asynchronous programming allows the program to continue executing other tasks while a long-running operation runs in the background, without waiting for it to finish."
    },
    {
        question: "Asynchronous programming in C++ requires thread synchronization.",
        options: ["True", "False"],
        correct: 1,
        explanation: "Asynchronous programming does not necessarily require explicit thread synchronization. std::async and std::future handle coordination automatically without manual sync primitives."
    },
    {
        question: "Function used to attach the socket to a specific port.",
        options: ["setsockopt", "accept", "bind", "listen"],
        correct: 2,
        explanation: "bind() assigns a local address (IP and port) to a socket, attaching it to a specific port so it can receive incoming connections on that port."
    },
    {
        question: "In Client-Server socket programming setup, the server forms the listener socket while the client reaches out to the server.",
        options: ["True", "False"],
        correct: 0,
        explanation: "The server creates a listener socket using listen() and accept(), while the client uses connect() to initiate a connection to the server."
    },
    {
        question: "Which IPC strategy stores messages in a queue until the recipient retrieves them?",
        options: ["Shared Memory", "Pipes", "Message Queues", "Signal"],
        correct: 2,
        explanation: "Message Queues store messages in a FIFO queue managed by the OS. The recipient process can retrieve them at its own pace without needing to be synchronized with the sender."
    },
    {
        question: "What Windows-specific IPC strategy is covered in the Module 5 lecture?",
        options: ["Named Pipes", "File Mapping", "Message Queue", "Sockets"],
        correct: 1,
        explanation: "File Mapping is a Windows-specific IPC mechanism that allows processes to share data by mapping a file or shared memory object into their address spaces."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = [];
let activeQuestions = [];
let displayMode = 'one'; // 'one' or 'all'

function setMode(mode) {
    displayMode = mode;
    document.getElementById('modeOneBtn').classList.toggle('active', mode === 'one');
    document.getElementById('modeAllBtn').classList.toggle('active', mode === 'all');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz(shuffle) {
    activeQuestions = [...questions];
    if (shuffle) {
        shuffleArray(activeQuestions);
    }
    answered = new Array(activeQuestions.length).fill(null);
    currentQuestion = 0;
    score = 0;
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('resultsContainer').classList.add('hidden');

    if (displayMode === 'one') {
        document.getElementById('quizContainer').classList.remove('hidden');
        document.getElementById('allQuestionsContainer').classList.add('hidden');
        loadQuestion();
    } else {
        document.getElementById('quizContainer').classList.add('hidden');
        document.getElementById('allQuestionsContainer').classList.remove('hidden');
        loadAllQuestions();
    }
}

function isCorrectAnswer(q, index) {
    if (Array.isArray(q.correct)) {
        return q.correct.includes(index);
    }
    return index === q.correct;
}

function isMultiSelect(q) {
    return Array.isArray(q.correct);
}

function loadQuestion() {
    const q = activeQuestions[currentQuestion];
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1}`;
    document.getElementById('questionText').textContent = q.question;
    document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${activeQuestions.length}`;
    document.getElementById('progressFill').style.width = `${((currentQuestion + 1) / activeQuestions.length) * 100}%`;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    // Show hint for multi-select questions
    if (isMultiSelect(q) && answered[currentQuestion] === null) {
        const hint = document.createElement('p');
        hint.className = 'multi-hint';
        hint.textContent = `(Select ${q.correct.length} answers)`;
        optionsContainer.appendChild(hint);
    }

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);

        if (answered[currentQuestion] !== null) {
            btn.classList.add('disabled');
            if (isCorrectAnswer(q, index)) {
                btn.classList.add('show-correct');
            }
            const userAnswers = Array.isArray(answered[currentQuestion]) ? answered[currentQuestion] : [answered[currentQuestion]];
            if (userAnswers.includes(index) && !isCorrectAnswer(q, index)) {
                btn.classList.add('incorrect');
            }
            if (userAnswers.includes(index) && isCorrectAnswer(q, index)) {
                btn.classList.add('show-correct');
            }
        }

        // Show selected state for multi-select in progress
        if (isMultiSelect(q) && answered[currentQuestion] === null && selectedOptions.includes(index)) {
            btn.classList.add('selected');
        }

        optionsContainer.appendChild(btn);
    });

    const feedback = document.getElementById('feedback');
    const explanationEl = document.getElementById('explanation');

    if (answered[currentQuestion] !== null) {
        feedback.style.display = 'block';
        const userAnswers = Array.isArray(answered[currentQuestion]) ? answered[currentQuestion] : [answered[currentQuestion]];
        let isAllCorrect;
        if (isMultiSelect(q)) {
            isAllCorrect = q.correct.every(c => userAnswers.includes(c)) && userAnswers.length === q.correct.length;
        } else {
            isAllCorrect = userAnswers[0] === q.correct;
        }

        if (isAllCorrect) {
            feedback.className = 'feedback correct';
            feedback.textContent = '\u2713 Correct!';
        } else {
            feedback.className = 'feedback incorrect';
            const correctTexts = isMultiSelect(q)
                ? q.correct.map(c => q.options[c]).join(' & ')
                : q.options[q.correct];
            feedback.textContent = `\u2717 Incorrect. The correct answer is: ${correctTexts}`;
        }
        explanationEl.style.display = 'block';
        explanationEl.textContent = q.explanation;
    } else {
        feedback.style.display = 'none';
        feedback.className = 'feedback';
        explanationEl.style.display = 'none';
        explanationEl.textContent = '';
    }

    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = answered[currentQuestion] === null;

    if (currentQuestion === activeQuestions.length - 1 && answered[currentQuestion] !== null) {
        document.getElementById('nextBtn').textContent = 'See Results \u2192';
    } else {
        document.getElementById('nextBtn').textContent = 'Next \u2192';
    }
}

let selectedOptions = [];

function selectAnswer(index) {
    if (answered[currentQuestion] !== null) return;

    const q = activeQuestions[currentQuestion];

    if (isMultiSelect(q)) {
        // Toggle selection
        if (selectedOptions.includes(index)) {
            selectedOptions = selectedOptions.filter(i => i !== index);
        } else {
            selectedOptions.push(index);
        }

        // If user selected enough options, submit
        if (selectedOptions.length === q.correct.length) {
            answered[currentQuestion] = [...selectedOptions];
            const isAllCorrect = q.correct.every(c => selectedOptions.includes(c));
            if (isAllCorrect) {
                score++;
            }
            selectedOptions = [];
            loadQuestion();
        } else {
            // Re-render to show selected state
            loadQuestion();
        }
    } else {
        answered[currentQuestion] = index;

        if (index === q.correct) {
            score++;
        }

        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, i) => {
            btn.classList.add('disabled');
            if (i === q.correct) {
                btn.classList.add('show-correct');
            }
            if (i === index && index !== q.correct) {
                btn.classList.add('incorrect');
            }
        });

        const feedback = document.getElementById('feedback');
        feedback.style.display = 'block';
        if (index === q.correct) {
            feedback.className = 'feedback correct';
            feedback.textContent = '\u2713 Correct!';
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `\u2717 Incorrect. The correct answer is: ${q.options[q.correct]}`;
        }

        const explanationEl = document.getElementById('explanation');
        explanationEl.style.display = 'block';
        explanationEl.textContent = q.explanation;

        document.getElementById('nextBtn').disabled = false;

        if (currentQuestion === activeQuestions.length - 1) {
            document.getElementById('nextBtn').textContent = 'See Results \u2192';
        }
    }
}

function nextQuestion() {
    if (currentQuestion < activeQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function showResults() {
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.remove('hidden');

    const percentage = Math.round((score / activeQuestions.length) * 100);
    document.getElementById('scoreDisplay').textContent = `${score} / ${activeQuestions.length} (${percentage}%)`;

    let message = '';
    if (percentage === 100) {
        message = 'Perfect score! You have mastered C++ Concurrency, IPC & Networking!';
    } else if (percentage >= 80) {
        message = 'Great job! You have a solid understanding of the material.';
    } else if (percentage >= 60) {
        message = 'Good effort! Review the topics you missed and try again.';
    } else if (percentage >= 40) {
        message = 'Keep studying! Focus on the areas where you struggled.';
    } else {
        message = 'You need more review. Go through the material again and retry.';
    }
    document.getElementById('scoreMessage').textContent = message;

    // Build summary
    const summaryList = document.getElementById('summaryList');
    summaryList.innerHTML = '';

    // Add filter buttons
    const filterDiv = document.createElement('div');
    filterDiv.className = 'summary-filter';
    filterDiv.innerHTML = `
        <button class="filter-btn active" onclick="filterSummary('all', this)">All (${activeQuestions.length})</button>
        <button class="filter-btn" onclick="filterSummary('correct', this)">\u2713 Correct (${score})</button>
        <button class="filter-btn" onclick="filterSummary('incorrect', this)">\u2717 Incorrect (${activeQuestions.length - score})</button>
    `;
    summaryList.appendChild(filterDiv);

    // Add each question summary
    activeQuestions.forEach((q, i) => {
        const userAnswers = Array.isArray(answered[i]) ? answered[i] : [answered[i]];
        let isCorrect;
        if (isMultiSelect(q)) {
            isCorrect = q.correct.every(c => userAnswers.includes(c)) && userAnswers.length === q.correct.length;
        } else {
            isCorrect = userAnswers[0] === q.correct;
        }

        const item = document.createElement('div');
        item.className = `summary-item ${isCorrect ? 'correct' : 'incorrect'}`;
        item.dataset.result = isCorrect ? 'correct' : 'incorrect';

        const userAnswerText = userAnswers.map(a => q.options[a]).join(' & ');
        const correctAnswerText = isMultiSelect(q)
            ? q.correct.map(c => q.options[c]).join(' & ')
            : q.options[q.correct];

        let answerText = '';
        if (isCorrect) {
            answerText = `Your answer: <span>${userAnswerText}</span>`;
        } else {
            answerText = `Your answer: ${userAnswerText} &nbsp;|&nbsp; Correct answer: <span>${correctAnswerText}</span>`;
        }

        item.innerHTML = `
            <div class="summary-status">${isCorrect ? '\u2713 Correct' : '\u2717 Incorrect'}</div>
            <div class="summary-question">${i + 1}. ${q.question}</div>
            <div class="summary-answer">${answerText}</div>
        `;
        summaryList.appendChild(item);
    });
}

function filterSummary(type, btn) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter items
    document.querySelectorAll('.summary-item').forEach(item => {
        if (type === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = item.dataset.result === type ? 'block' : 'none';
        }
    });
}

function restartQuiz() {
    document.getElementById('resultsContainer').classList.add('hidden');
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('allQuestionsContainer').classList.add('hidden');
    document.getElementById('startScreen').classList.remove('hidden');
}

// === ALL QUESTIONS ON ONE PAGE MODE ===

let allSelectedOptions = {};

function loadAllQuestions() {
    const container = document.getElementById('allQuestionsList');
    container.innerHTML = '';
    allSelectedOptions = {};

    activeQuestions.forEach((q, qIndex) => {
        const card = document.createElement('div');
        card.className = 'all-question-card';
        card.id = `allQ${qIndex}`;

        let hintHTML = '';
        if (isMultiSelect(q)) {
            hintHTML = `<p class="multi-hint">(Select ${q.correct.length} answers)</p>`;
            allSelectedOptions[qIndex] = [];
        }

        let optionsHTML = '';
        q.options.forEach((option, oIndex) => {
            optionsHTML += `<button class="option-btn" onclick="selectAllAnswer(${qIndex}, ${oIndex})" id="allQ${qIndex}O${oIndex}">${option}</button>`;
        });

        card.innerHTML = `
            <h2 class="question-number">Question ${qIndex + 1}</h2>
            <p class="question-text">${q.question}</p>
            ${hintHTML}
            <div class="options">${optionsHTML}</div>
            <div class="feedback" id="allFeedback${qIndex}"></div>
            <div class="explanation" id="allExplanation${qIndex}"></div>
        `;
        container.appendChild(card);
    });

    updateAllProgress();
}

function selectAllAnswer(qIndex, oIndex) {
    if (answered[qIndex] !== null) return;

    const q = activeQuestions[qIndex];

    if (isMultiSelect(q)) {
        // Toggle selection
        const sel = allSelectedOptions[qIndex];
        const idx = sel.indexOf(oIndex);
        if (idx > -1) {
            sel.splice(idx, 1);
        } else {
            sel.push(oIndex);
        }

        // Update button visuals
        q.options.forEach((_, i) => {
            const btn = document.getElementById(`allQ${qIndex}O${i}`);
            btn.classList.toggle('selected', sel.includes(i));
        });

        // Auto-submit when enough selected
        if (sel.length === q.correct.length) {
            answered[qIndex] = [...sel];
            const isAllCorrect = q.correct.every(c => sel.includes(c));
            if (isAllCorrect) score++;
            showAllFeedback(qIndex);
        }
    } else {
        answered[qIndex] = oIndex;
        if (oIndex === q.correct) score++;
        showAllFeedback(qIndex);
    }

    updateAllProgress();
}

function showAllFeedback(qIndex) {
    const q = activeQuestions[qIndex];
    const card = document.getElementById(`allQ${qIndex}`);
    const feedback = document.getElementById(`allFeedback${qIndex}`);
    const explanationEl = document.getElementById(`allExplanation${qIndex}`);

    // Disable all buttons
    q.options.forEach((_, i) => {
        const btn = document.getElementById(`allQ${qIndex}O${i}`);
        btn.classList.add('disabled');
        btn.classList.remove('selected');

        if (isCorrectAnswer(q, i)) {
            btn.classList.add('show-correct');
        }

        const userAnswers = Array.isArray(answered[qIndex]) ? answered[qIndex] : [answered[qIndex]];
        if (userAnswers.includes(i) && !isCorrectAnswer(q, i)) {
            btn.classList.add('incorrect');
        }
    });

    // Show feedback
    const userAnswers = Array.isArray(answered[qIndex]) ? answered[qIndex] : [answered[qIndex]];
    let isAllCorrect;
    if (isMultiSelect(q)) {
        isAllCorrect = q.correct.every(c => userAnswers.includes(c)) && userAnswers.length === q.correct.length;
    } else {
        isAllCorrect = userAnswers[0] === q.correct;
    }

    feedback.style.display = 'block';
    if (isAllCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = '\u2713 Correct!';
        card.classList.add('answered-correct');
    } else {
        feedback.className = 'feedback incorrect';
        const correctTexts = isMultiSelect(q)
            ? q.correct.map(c => q.options[c]).join(' & ')
            : q.options[q.correct];
        feedback.textContent = `\u2717 Incorrect. The correct answer is: ${correctTexts}`;
        card.classList.add('answered-incorrect');
    }

    explanationEl.style.display = 'block';
    explanationEl.textContent = q.explanation;
}

function updateAllProgress() {
    const answeredCount = answered.filter(a => a !== null).length;
    document.getElementById('allProgressText').textContent = `${answeredCount} of ${activeQuestions.length} answered`;
    document.getElementById('submitAllBtn').disabled = answeredCount < activeQuestions.length;
}

function submitAll() {
    document.getElementById('allQuestionsContainer').classList.add('hidden');
    showResults();
}
