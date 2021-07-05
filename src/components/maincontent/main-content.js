import creditCard from "@/components/creditcard/creditcard.vue";

export default {
  name: "mainContent",
  components: { creditCard },
  data() {
    return {
      expandTransaction: true,
    };
  },
  created() {
    this.transactionData = [
      {
        name: "Hamleys",
        charge: "+S$ 150",
        date: "20 May 2020",
        type: "Refund on debit card",
      },
      {
        name: "Hamleys",
        charge: "-S$ 150",
        date: "20 May 2020",
        type: "Charged to debit card",
      },
      {
        name: "Hamleys",
        charge: "-S$ 150",
        date: "20 May 2020",
        type: "Charged to debit card",
      },
      {
        name: "Hamleys",
        charge: "-S$ 150",
        date: "20 May 2020",
        type: "Charged to debit card",
      },
    ];
  },
  methods: {
    expand() {
      this.expandTransaction = !this.expandTransaction;
    },
  },
};
