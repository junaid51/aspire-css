<template>
  <div class="main-content">
    <div class="avail-bal">
      Available Balance
      <div>
        <div class="balance">
          <font-awesome-icon style="color: rgb(45, 192, 53);" :icon="['fas', 'money-bill-alt']" />&nbsp;&nbsp;3,000
        </div>
        <button type="button" class="new-card"><font-awesome-icon :icon="['fas', 'plus-circle']" /> New card</button>
      </div>
    </div>
    <div class="card-info">
      <div class="credit-cards">
        <creditCard />
        <div class="card-options" style="margin-top: 25px;">
          <ul class="menu-list">
            <li class="menu-item"><font-awesome-icon :icon="['fas', 'home']" /><span>Freeze card</span></li>
            <li class="menu-item"><font-awesome-icon :icon="['fas', 'credit-card']" /><span>Set spend limit</span></li>
            <li class="menu-item"><font-awesome-icon :icon="['fas', 'exchange-alt']" /><span>Add to GPay</span></li>
            <li class="menu-item"><font-awesome-icon :icon="['fas', 'arrow-circle-up']" /><span>Replace card</span></li>
            <li class="menu-item"><font-awesome-icon :icon="['fas', 'user']" /><span>Cancel card</span></li>
          </ul>
        </div>
      </div>
      <div class="card-transactions">
        <div class="tran">
          <div @click="expand" class="accordion">
            <div>
              <font-awesome-icon :icon="['fas', 'exchange-alt']" />&nbsp;&nbsp;Recent transactions
            </div>
            <font-awesome-icon :icon="['fas', 'chevron-circle-down']" />
          </div>
          <ul class="panel" :class="{'active': expandTransaction}">
            <li v-for="(item, index) in transactionData" :key="index">
              <div class="shop">
                <span>{{item.name}}</span>
                <span>{{item.charge}}</span>
              </div>
              <div class="date">{{item.date}}</div>
              <div class="type"><font-awesome-icon :icon="['fas', 'credit-card']" /> {{item.type}}</div>
            </li>
            <li class="view-all">View all card transactions</li>
          </ul>
        </div>
        </div>
    </div>
  </div>
</template>

<script src="./main-content.js"></script>

<style lang="scss">
@import "./main-content.scss";
</style>
