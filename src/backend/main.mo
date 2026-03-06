import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Enquiry = {
    fullName : Text;
    email : Text;
    city : Text;
    currentWebsite : ?Text;
    improvement : Text;
  };

  let enquiries = List.empty<Enquiry>();
  var submissionCount = 0;

  public shared ({ caller }) func submitEnquiry(fullName : Text, email : Text, city : Text, currentWebsite : ?Text, improvement : Text) : async () {
    let enquiry : Enquiry = {
      fullName;
      email;
      city;
      currentWebsite;
      improvement;
    };

    enquiries.add(enquiry);
    submissionCount += 1;
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.toArray();
  };

  public query ({ caller }) func getSubmissionCount() : async Nat {
    submissionCount;
  };
};
