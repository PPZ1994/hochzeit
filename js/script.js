// Password Protection Script
// Change this password to whatever you want
const CORRECT_PASSWORD = "Coco";

// Check if user has already entered correct password in this session
window.addEventListener('DOMContentLoaded', function() {
    // Check if password was already entered correctly
    if (sessionStorage.getItem('weddingAccess') === 'granted') {
        showContent();
    }
    
    // Allow Enter key to submit password
    document.getElementById('password-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });
});

function checkPassword() {
    const input = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');
    const enteredPassword = input.value;
    
    if (enteredPassword === CORRECT_PASSWORD) {
        // Password is correct
        sessionStorage.setItem('weddingAccess', 'granted');
        showContent();
    } else {
        // Password is incorrect
        errorMessage.textContent = '❌ Falsches Passwort. Bitte versuche es erneut.';
        input.value = '';
        input.focus();
        
        // Shake animation
        input.style.animation = 'shake 0.5s';
        setTimeout(() => {
            input.style.animation = '';
        }, 500);
    }
}

function showContent() {
    const overlay = document.getElementById('password-overlay');
    const content = document.getElementById('wedding-content');
    
    // Fade out overlay
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        content.classList.remove('hidden');
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
}

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navigation a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for sticky nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Made with Bob

// RSVP Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvp-form');
    const guestCountSelect = document.getElementById('guest-count');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRSVPSubmit();
        });
    }
    
    // Handle guest count changes
    if (guestCountSelect) {
        guestCountSelect.addEventListener('change', function() {
            updateAdditionalGuestFields(this.value);
        });
    }
});

function updateAdditionalGuestFields(count) {
    const additionalGuestsDiv = document.getElementById('additional-guests');
    const guestCount = parseInt(count);
    
    // Clear existing fields
    additionalGuestsDiv.innerHTML = '';
    
    if (guestCount > 1) {
        additionalGuestsDiv.style.display = 'block';
        
        // Add fields for additional guests (starting from guest 2)
        for (let i = 2; i <= guestCount; i++) {
            const guestFieldsHTML = `
                <div class="additional-guest-group">
                    <h4 style="color: #667eea; margin-bottom: 15px;">Person ${i}</h4>
                    <div class="form-group">
                        <label for="guest-${i}-first-name">Vorname *</label>
                        <input type="text" id="guest-${i}-first-name" name="guest-${i}-first-name" required placeholder="Vorname">
                    </div>
                    <div class="form-group">
                        <label for="guest-${i}-last-name">Nachname *</label>
                        <input type="text" id="guest-${i}-last-name" name="guest-${i}-last-name" required placeholder="Nachname">
                    </div>
                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" id="guest-${i}-is-child" name="guest-${i}-is-child">
                            <span>Diese Person ist ein Kind</span>
                        </label>
                    </div>
                </div>
            `;
            additionalGuestsDiv.insertAdjacentHTML('beforeend', guestFieldsHTML);
        }
    } else {
        additionalGuestsDiv.style.display = 'none';
    }
}

function handleRSVPSubmit() {
    // Get form data
    const guestCount = parseInt(document.getElementById('guest-count').value);
    
    const formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('guest-email').value,
        phone: document.getElementById('guest-phone').value,
        attendance: document.getElementById('attendance').value,
        guestCount: guestCount,
        dietary: document.getElementById('dietary').value,
        timestamp: new Date().toISOString(),
        additionalGuests: []
    };
    
    // Collect additional guest information if any
    if (guestCount > 1) {
        for (let i = 2; i <= guestCount; i++) {
            const guestFirstName = document.getElementById(`guest-${i}-first-name`);
            const guestLastName = document.getElementById(`guest-${i}-last-name`);
            const guestIsChild = document.getElementById(`guest-${i}-is-child`);
            
            if (guestFirstName && guestLastName) {
                formData.additionalGuests.push({
                    firstName: guestFirstName.value,
                    lastName: guestLastName.value,
                    isChild: guestIsChild ? guestIsChild.checked : false
                });
            }
        }
    }
    
    // Store in localStorage (for demonstration - in production, send to a server)
    let rsvpList = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
    rsvpList.push(formData);
    localStorage.setItem('weddingRSVPs', JSON.stringify(rsvpList));
    
    // Also log to console so you can see the submissions
    console.log('RSVP Submission:', formData);
    console.log('All RSVPs:', rsvpList);
    
    // Hide form and show success message
    document.getElementById('rsvp-form').style.display = 'none';
    document.getElementById('rsvp-success').style.display = 'block';
    
    // Scroll to success message
    document.getElementById('rsvp-success').scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Optional: Send email notification (requires backend service)
    // You can integrate with services like EmailJS, Formspree, or your own backend
    sendEmailNotification(formData);
}

function sendEmailNotification(formData) {
    // Google Forms URL
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfK37BB5RkBx4NLLitaw6Qwcy-spj9g2ik83zrCrW640Lj6ew/formResponse';
    
    // Entry IDs aus deinem Google Form
    const ENTRY_IDS = {
        firstName: 'entry.344384493',
        lastName: 'entry.939518281',
        email: 'entry.973172010',
        phone: 'entry.357480141',
        attendance: 'entry.172188804',
        guestCount: 'entry.687443435',
        guest2FirstName: 'entry.387587603',
        guest2LastName: 'entry.405749883',
        guest2IsChild: 'entry.1717686734',
        guest3FirstName: 'entry.1755264069',
        guest3LastName: 'entry.889396871',
        guest3IsChild: 'entry.634776771',
        dietary: 'entry.977495200'
    };
    
    // Erstelle FormData Objekt
    const googleFormData = new FormData();
    googleFormData.append(ENTRY_IDS.firstName, formData.firstName);
    googleFormData.append(ENTRY_IDS.lastName, formData.lastName);
    googleFormData.append(ENTRY_IDS.email, formData.email);
    googleFormData.append(ENTRY_IDS.phone, formData.phone || '');
    googleFormData.append(ENTRY_IDS.attendance, formData.attendance === 'yes' ? 'Ja, ich komme gerne!' : 'Leider kann ich nicht kommen');
    googleFormData.append(ENTRY_IDS.guestCount, formData.guestCount);
    googleFormData.append(ENTRY_IDS.dietary, formData.dietary || '');
    
    // Füge zusätzliche Gäste hinzu
    if (formData.additionalGuests && formData.additionalGuests.length > 0) {
        if (formData.additionalGuests[0]) {
            googleFormData.append(ENTRY_IDS.guest2FirstName, formData.additionalGuests[0].firstName);
            googleFormData.append(ENTRY_IDS.guest2LastName, formData.additionalGuests[0].lastName);
            googleFormData.append(ENTRY_IDS.guest2IsChild, formData.additionalGuests[0].isChild ? 'Ja' : '');
        }
        if (formData.additionalGuests[1]) {
            googleFormData.append(ENTRY_IDS.guest3FirstName, formData.additionalGuests[1].firstName);
            googleFormData.append(ENTRY_IDS.guest3LastName, formData.additionalGuests[1].lastName);
            googleFormData.append(ENTRY_IDS.guest3IsChild, formData.additionalGuests[1].isChild ? 'Ja' : '');
        }
    }
    
    // Sende Daten an Google Forms
    fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
    }).then(() => {
        console.log('✅ Daten erfolgreich an Google Forms gesendet');
    }).catch((error) => {
        console.error('❌ Fehler beim Senden an Google Forms:', error);
    });
}

// Function to view all RSVPs (for the couple to check)
function viewAllRSVPs() {
    const rsvps = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
    console.table(rsvps);
    return rsvps;
}

// Function to export RSVPs as CSV
function exportRSVPsAsCSV() {
    const rsvps = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
    
    if (rsvps.length === 0) {
        alert('Keine RSVPs vorhanden');
        return;
    }
    
    // Create CSV content
    const headers = ['Vorname', 'Nachname', 'Email', 'Telefon', 'Zusage', 'Anzahl', 'Ernährung', 'Zeitstempel'];
    const csvContent = [
        headers.join(','),
        ...rsvps.map(rsvp => [
            `"${rsvp.firstName}"`,
            `"${rsvp.lastName}"`,
            `"${rsvp.email}"`,
            `"${rsvp.phone || ''}"`,
            `"${rsvp.attendance}"`,
            rsvp.guestCount,
            `"${rsvp.dietary || ''}"`,
            `"${rsvp.timestamp}"`
        ].join(','))
    ].join('\n');
    
    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'wedding-rsvps.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Make functions available in console for the couple to use
window.viewAllRSVPs = viewAllRSVPs;
window.exportRSVPsAsCSV = exportRSVPsAsCSV;
