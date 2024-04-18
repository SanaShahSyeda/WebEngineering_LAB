let guests = [
  { name: "john", age: 23, RSVP: true },
  { name: "jiyaa", age: 30, RSVP: false },
  { name: "smith", age: 36, RSVP: true },
  { name: "seraa", age: 41, RSVP: true },
];

function generateInvitationMessages(guests, ...message) {
  var invitationGuests = guests;
  var invitationMessages = [];
  i = 0;
  invitationGuests.forEach((guest) => {
    invitationMessages[i++] = guest.name + ": " + message[0] + message[1];
  });
  return invitationMessages;
}

let invitationMessages = generateInvitationMessages(
  guests,
  " Respected ! You are cordially invited to the party",
  " at 5:00 pm"
);

console.log(invitationMessages);
