import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Time "mo:core/Time";

actor {
  type Article = {
    title : Text;
    slug : Text;
    summary : Text;
    content : Text;
    category : Text;
    author : Text;
    publishedAt : Time.Time;
    imageUrl : Text;
    tags : [Text];
    readTime : Nat;
    isFeatured : Bool;
  };

  module Article {
    public func compare(a1 : Article, a2 : Article) : Order.Order {
      Text.compare(a1.slug, a2.slug);
    };
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    submittedAt : Time.Time;
  };

  let articles = Map.empty<Text, Article>();

  public shared ({ caller }) func addArticle(article : Article) : async () {
    if (articles.containsKey(article.slug)) {
      Runtime.trap("Article with this slug already exists");
    };
    articles.add(article.slug, article);
  };

  public query ({ caller }) func getArticle(slug : Text) : async Article {
    switch (articles.get(slug)) {
      case (null) { Runtime.trap("Article not found") };
      case (?article) { article };
    };
  };

  public query ({ caller }) func getArticlesByCategory(category : Text) : async [Article] {
    articles.values().toArray().filter(
      func(article) {
        Text.equal(article.category, category);
      }
    ).sort();
  };

  public query ({ caller }) func getFeaturedArticles() : async [Article] {
    articles.values().toArray().filter(
      func(article) {
        article.isFeatured;
      }
    ).sort();
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      submittedAt = Time.now();
    };
    ignore submission;
  };
};
