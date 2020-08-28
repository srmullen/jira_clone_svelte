<script>
  let toasts = [
    { type: 'success', title: 'You win!', message: 'Nice job.' },
    { type: 'warning', title: 'Look out!', message: 'You could be making a big mistake.'},
    { type: 'danger', title: 'You effed up.', message: 'We cant trust you anymore.'}
  ];
</script>

<div class="container">
  {#each toasts as toast}
    <div class="toast {toast.type}">
      <div class="close-icon">X</div>
      <div class="title">{toast.title}</div>
      <div class="message">{toast.message}</div>
    </div>
  {/each}
</div>

<style lang="scss">
  @import '../shared/mixin';

  .container {
    position: fixed;
    right: 30px;
    top: 50px;
  }

  .toast {
    position: relative;
    width: 300px;
    padding: 15px 20px;
    margin-bottom: 5px;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    transition: all 0.15s;
    @include hardwareAccelerate;
  }

  .success {
    background: var(--success);
  }

  .warning {
    background: var(--warning);
  }

  .danger {
    background: var(--danger);
  }

  .close-icon {
    position: absolute;
    top: 13px;
    right: 14px;
    font-size: 22px;
    cursor: pointer;
    color: #fff
  }

  .title {
    padding-right: 22px;
    font-size: 15px;
    font-family: var(--font-medium);
  }

  .message {
    padding: 8px 10px 0 0;
    white-space: pre-wrap;
    font-size: 14px;
    font-family: var(--font-medium);
  }
</style>