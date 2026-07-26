document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Yahan tu alert dikha sakta hai
    alert("Registration Successful! Check your WhatsApp for confirmation.");
    
    // Note: Real data save karne ke liye Google Form Embed best hai mobile se.
    // Custom form ko connect karne ke liye SheetDB.io account banana padega (thoda complex hai mobile pe).
    
    document.getElementById('regForm').reset();
});
