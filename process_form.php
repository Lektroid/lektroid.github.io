<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['firstname'];
    $email = $_POST['email'];
    $enquiry = $_POST['enquiry'];
    $subject = $_POST['subject'];

    $to = 'lekproductionsuk@gmail.com';
    $subject = "New Contact Form Submission: " . $subject;
    $message = "Name: $name\nEmail: $email\nEnquiry: $enquiry\n\nMessage:\n$subject";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your message. We will get back to you soon!";
    } else {
        echo "Sorry, something went wrong. Please try again.";
    }
}
?>
